import React from "react";
import css from './FormsControl.module.css'

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
        <div>
            <input {...input} {...props}  />
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const TextArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={css.formControl + ' ' + (hasError ? css.error : '')}>
        <div>
            <textarea {...input} {...props}  />
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

const adaptFileEventToValue = delegate => e => delegate(e);

export const FileInput = ({
                       input: { value: omitValue, onChange, onBlur, ...inputProps },
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};