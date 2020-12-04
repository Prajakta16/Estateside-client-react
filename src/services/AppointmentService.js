const userUrl = `${process.env.REACT_APP_PROXY_URL}/api/users`;
const propertyUrl = `${process.env.REACT_APP_PROXY_URL}/api/properties`;

const findAppointmentsForProperty = (propertyId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}/appointments`)
            .then(response => response.json())
    )
}

const findAppointmentsForUser = (userId) => {
    return (
        fetch(`${userUrl}/${userId}/appointments`)
            .then(response => response.json())
    )
}

const createAppointmentForProperty = (propertyId, appointment) => {
    return (
        fetch(`${propertyUrl}/${propertyId}/appointments`, {
            method: "POST",
            body: JSON.stringify(appointment),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const createAppointmentForUser = (userId, appointment) => {
    return (
        fetch(`${userUrl}/${userId}/appointments`, {
            method: "POST",
            body: JSON.stringify(appointment),
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
    )
}

const deleteAppointmentForProperty = (propertyId, appointmentId) => {
    return (
        fetch(`${propertyUrl}/${propertyId}/appointments/${appointmentId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const deleteAppointmentForUser = (userId, appointmentId) => {
    return (
        fetch(`${userUrl}/${userId}/appointments/${appointmentId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

export default {
    findAppointmentsForProperty,
    findAppointmentsForUser,
    createAppointmentForProperty,
    createAppointmentForUser,
    deleteAppointmentForProperty,
    deleteAppointmentForUser
}
