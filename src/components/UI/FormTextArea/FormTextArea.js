import React from 'react';

import './FormTextArea.css';

const FormTextArea = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className='group'>
			<textarea className='textarea' onChange={handleChange} {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					}textarea-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormTextArea;
