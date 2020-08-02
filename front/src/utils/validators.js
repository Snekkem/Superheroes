export const required = (value) => {
    if(value) return undefined;
    return 'Заполните поле'
}

export const maxLengthCreator = (maxLength) => (value)=> {
    if(value && value.length > 25) return `Максимальная длина ${maxLength} символов`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value)=> {
    if(value && value.length < 2) return `Минимальная длина пароля ${minLength} символов`;
    return undefined;
}