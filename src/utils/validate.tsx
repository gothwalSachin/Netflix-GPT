export const emailAndPhoneNumberValidator = (emailOrPhone: string): boolean => {
    console.log(emailOrPhone);
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailOrPhone) || /^[6-9]\d{9}$/.test(emailOrPhone);
}

export const passwordValidator = (password: string): boolean => {
    console.log(password)
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}