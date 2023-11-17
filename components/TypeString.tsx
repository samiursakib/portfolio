import Typewriter from 'typewriter-effect';
const TypeString = ({ strings }: { strings?: string | string[] }) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true
      }}
    />
  );
}

export default TypeString;