const validation = (values) => {
    let errors = {};

    if (!values.FirstName) {
        errors.FirstName = "FirstName is required";
    }

    if (!values.LastName) {
        errors.LastName = "LastName is required";
    }

    if (!values.Email) {
        errors.Email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = "Email is not Valid";
    }

    if (!values.PhoneNo) {
        errors.PhoneNo = "PhoneNo is required";
    } else if (values.PhoneNo.length !== 10) {
        errors.PhoneNo = "Phone should have 10 digits";
    }

    if (!values.Password) {
        errors.Password = "Password is required";
    } else if (values.Password.length < 6) {
        errors.Password = "Password minimum length is 6";
    } else if (!/[a-z]/.test(values.Password)) {
        errors.Password = "Password must contain lowercase letters";
    } else if (!/[A-Z]/.test(values.Password)) {
        errors.Password = "Password must contain uppercase letters";
    } else if (!/[0-9]/.test(values.Password)) {
        errors.Password = "Password must contain numbers";
    } else if (!/[!@#$%^&*]/.test(values.Password)) {
        errors.Password = "Password must contain special characters (!@#$%^&*)";
    }

    

    if (!values.Role) {
        errors.Role = "Role is required";
    }

    if (!values.AadharNo) {
        errors.AadharNo = "AadharNo is required";
    }

    if (!values.LicenceNo) {
        errors.LicenceNo = "LicenceNo is required";
    }

    return errors;
};

export default validation;
