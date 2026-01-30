/**
 * FormInput Component
 * Reusable glass input field with default, focus, and error states
 * 
 * @param {string} type - Input type (text, email, etc.)
 * @param {string} name - Input name
 * @param {string} label - Input label
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {function} onFocus - Focus handler
 * @param {function} onBlur - Blur handler
 * @param {string} error - Error message
 * @param {boolean} required - Required field
 * @param {boolean} textarea - Render as textarea
 * @param {number} rows - Textarea rows
 * @param {string} className - Additional CSS classes
 */
const FormInput = ({ 
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  required = false,
  textarea = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  const inputClasses = `
    w-full px-4 py-3 glass-input text-white placeholder-gray-500
    ${error ? 'border-red-500/50 focus:border-red-500' : ''}
    ${className}
  `;

  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <InputComponent
        type={textarea ? undefined : type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        rows={textarea ? rows : undefined}
        className={inputClasses}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
