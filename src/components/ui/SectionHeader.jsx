/**
 * SectionHeader Component
 * Reusable section title with gradient text and decorative underline
 * 
 * @param {string} title - Main title text
 * @param {string} highlight - Text to highlight with gradient
 * @param {string} subtitle - Optional subtitle text
 * @param {boolean} highlightFirst - Whether highlight comes before title
 */
const SectionHeader = ({ 
  title, 
  highlight, 
  subtitle,
  highlightFirst = false,
  className = '',
}) => {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {highlightFirst ? (
          <>
            <span className="gradient-text">{highlight}</span> {title}
          </>
        ) : (
          <>
            {title} <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 mx-auto rounded-full" />
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
