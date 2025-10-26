/**
 * @param {Object} props
 * @param {string} [props.description]
 * @param {React.ReactNode} [props.children]
 * @param {string | React.ReactNode} [props.title]
 */
export const ExperiencesContentDescription = ({ description, children, title }) => {
  return (
    <div className="text-gray-600 flex flex-col gap-y-[4px]">
      {title && <p className="text-gray-700 font-semibold text-[20px]">{title}</p>}
      {description || children}
    </div>
  );
};

export default ExperiencesContentDescription;
