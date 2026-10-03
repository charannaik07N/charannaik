// The "›" that ends an internal text link. External links use the ↗ icon instead.
export default function Chevron({ back = false }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-transform duration-200 ${
        back ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
      }`}
    >
      {back ? '‹' : '›'}
    </span>
  );
}
