const validateChecked = (i , k) => {
    if (i.checked || k.checked) {
        return true
    } else {
        return false
    }
}

const validateName  = (i) => {
    if (typeof(i) === 'string' && i !== '') {
        return true
    } else {
        return false
    }
}

const validateMobile  = (i) => {
    if ((typeof(i) === 'number' || 'string') &&  i !== '' ) {
        return true
    } else {
        return false
    }
}

const validateAddress  = (i) => {
    if (typeof(i) === 'string' && i !== '') {
        return true
    } else {
        return false
    }
}

const validateCity  = (i) => {
    if (typeof(i) === 'string' && i !== '') {
        return true
    } else {
        return false
    }
}

const validateStates = (i) => {
    if (typeof(i) === 'string' && i !== '') {
        return true
    } else {
        return false
    }
}

const validateZip  = (i) => {
    if ((typeof(i) === 'number' || 'string') &&  i !== '' ) {
        return true
    } else {
        return false
    }
}

export {
    validateAddress,
    validateCity,
    validateMobile,
    validateName,
    validateStates,
    validateZip,
    validateChecked,
}