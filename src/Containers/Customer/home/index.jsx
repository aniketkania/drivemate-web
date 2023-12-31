import React, { useEffect, useState } from "react";
import { getCustomStyles } from "./style";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { reversegeoCodeRequest } from "../../../redux/reversegeolocation/actions";
import { Link } from "react-router-dom";
import LoadingPage from "../../Loading";
import { fetchCurrentLocation } from "../../../redux/currentposition/actions";
import { requestDistance } from "../../../redux/distance/actions";

function CustomerHome() {
  const dispatch = useDispatch();

  const { currentLocation, reverseGeoLocation, distanceReducer } = useSelector(
    (state) => ({
      currentLocation: state.CurrentLocation,
      reverseGeoLocation: state.ReverseGeoLocation,
      distanceReducer: state.Distance,
    })
  );

  const [address, setAddress] = useState("");

  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    datetime: "",
  });

  const [distanceState, setDistanceState] = useState({
    text: "",
    value: 0,
  });

  const [durationState, setDurationState] = useState({
    text: "",
    value: 0,
  });

  const handleFormChange = (e) => {
    if (e.target.name !== "source") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  async function handleDistanceCall() {
    return new Promise(async (resolve, reject) => {
      try {
        await dispatch(requestDistance(formData));
        resolve("Success");
      } catch (error) {
        reject(error);
      }
    });
  }

  const handleCalculation = async (e) => {
    e.preventDefault();
    dispatch(requestDistance(formData));

    //dispatch(requestDistance(formData));
    // await handleDistanceCall().then(res => {
    //   console.log("distance",distance);
    // }).catch(error => {
    //   console.log(error);
    // })
    //   console.log("distance reducer",distance);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  useEffect(() => {
    dispatch(fetchCurrentLocation());
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      source: reverseGeoLocation?.data?.formatted_address,
    });
  }, [reverseGeoLocation?.data?.formatted_address]);

  useEffect(() => {
    const { distance, duration } = distanceReducer;
    setDistanceState({
      distance,
    });

    setDurationState({
      duration,
    });

    console.log(distance, duration);
  }, [distanceReducer]);

  function getLocationAddress() {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch(
          reversegeoCodeRequest({
            latitude: currentLocation.data.latitude,
            longitude: currentLocation.data.longitude,
          })
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  const getLocation = async (e) => {
    e.preventDefault();

    await getLocationAddress()
      .then((result) => {
        if (reverseGeoLocation && reverseGeoLocation.data.result[0]) {
          setAddress(reverseGeoLocation?.data?.formatted_address || "");
          //setAddress(reverseGeoLocation.data.result[0].formatted_address);
        }
      })
      .catch((error) => {
        console.error(error); // Handle error
      });
  };

  const [state, setState] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNo: "",
    Password: "",
    Status: false,
    Role: "C",
    AadharNo: "123",
    LicenceNo: "123",
    IsEmailConfirmed: false,
    IsPhoneConfirmed: false,
  });

  const handleSubmit = (e) => {
    console.log("Handle submit");
    e.preventDefault();
  };

  const customStyles = getCustomStyles();

  const handleChangeImage = (e) => {
    setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {currentLocation.loading ||
      reverseGeoLocation.loading ||
      distanceReducer.loading ? (
        <LoadingPage />
      ) : (
        <>
          <style>{customStyles}</style>
          <div className="center-horizontal">
            <div className="container">
              <main className="form-signin w-100">
                <form onSubmit={handleSubmit}>
                  <h1 className="h3 mb-3 fw-normal">Please Book Trip</h1>

                  <div className="container">
                    <div className="row" style={{ width: "700px" }}>
                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            disabled="true"
                            type="text"
                            className="form-control transparent-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Source</label>
                        </div>
                      </div>

                      <div className="col-3">
                        <div className="form-floating m-2">
                          <Link onClick={getLocation}>Get Location</Link>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ width: "700px" }}>
                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            disabled="true"
                            type="text"
                            className="form-control transparent-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Source Address</label>
                        </div>
                      </div>

                      <div className="col">
                        <div className="form-floating m-2">
                          <input
                            type="text"
                            name="source"
                            value={
                              reverseGeoLocation?.data?.formatted_address ||
                              "No Address"
                            }
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Source Address</label>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ width: "700px" }}>
                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            disabled="true"
                            type="text"
                            name="FirstName"
                            onChange={handleChange}
                            className="form-control transparent-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Destination</label>
                        </div>
                      </div>

                      <div className="col-8">
                        <div className="form-floating m-2">
                          <input
                            type="text"
                            name="destination"
                            onChange={handleFormChange}
                            className="form-control"
                            value={formData.destination}
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Address</label>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ width: "700px" }}>
                      <div className="col">
                        <div className="form-floating m-2">
                          <input
                            disabled="true"
                            type="text"
                            name="FirstName"
                            onChange={handleChange}
                            className="form-control transparent-input"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Date and Time</label>
                        </div>
                      </div>

                      <div className="col-8">
                        <div className="form-floating m-2">
                          <input
                            type="datetime-local"
                            name="datetime"
                            value={formData.datetime}
                            onChange={handleFormChange}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Date</label>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ width: "700px" }}>
                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            type="text"
                            name="datetime"
                            disabled="true"
                            className="form-control"
                            id="floatingInput"
                            value={
                              distanceReducer &&
                              distanceReducer.data &&
                              distanceReducer.data.distance !== undefined
                                ? distanceReducer.data.distance?.text
                                : "None"
                            }
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Distance</label>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            type="text"
                            disabled="true"
                            name="datetime"
                            className="form-control"
                            id="floatingInput"
                            value={
                              distanceReducer &&
                              distanceReducer.data &&
                              distanceReducer.data.duration !== undefined
                                ? distanceReducer.data.duration?.text
                                : "None"
                            }
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Duration</label>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="form-floating m-2">
                          <input
                            type="text"
                            name="datetime"
                            disabled="true"
                            className="form-control"
                            id="floatingInput"
                            value={
                              distanceReducer &&
                              distanceReducer.data &&
                              distanceReducer.data.distance !== undefined
                                ? Math.abs(Math.ceil(distanceReducer.data.distance?.value * 0.015))
                                : "None"
                            }
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInput">Amount</label>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ width: "700px" }}>
                      <div className="col-6">
                        <Link onClick={handleCalculation} className="">
                          Calculate
                        </Link>
                      </div>

                      <div className="col-6">
                        <button
                          onClick={handleFormSubmit}
                          className="btn btn-primary w-100 py-2 ms-3 mt-3"
                          type="submit"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CustomerHome;
