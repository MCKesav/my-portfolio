/**
 * FormInput Component
 * Apple-inspired liquid glass input field with smooth focus transitions
 * 
 * Uses the liquid glass design system with:
 * - Subtle background blur
 * - Focus glow effect matching accent color
 * - Error state with red tint
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
    w-full px-4 py-3.5 glass-input 
    text-white placeholder-gray-500
    font-medium
    ${error ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const InputComponent = textarea ? 'textarea' : 'input';

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
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
        <p className="text-sm text-red-400 mt-1.5 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
