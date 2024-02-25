import { Input } from '@/components/ui/input';

const KBInput = (props: {
  placeholder?: string | undefined;
  css?: string | undefined;
  required?: boolean | undefined;
}) => {
  return (
    <input
      type='text'
      className={props.css}
      // className='tw-rounded-full tw-w-96'
      placeholder={props.placeholder}
      required={props.required || false}
    />
  );
};

export default KBInput;
