import { useEffect, useState } from 'react';

export const App = () => {
  return (
    <div>
      <Parent lastChild={<ChildC />}>
        <ChildB />
      </Parent>
    </div>
  );
};

function Parent({
  children,
  lastChild,
}: {
  children: React.ReactNode;
  lastChild: React.ReactNode;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 1000);
  }, [value]);

  return (
    <div>
      value: {value}
      <ChildA />
      {children}
      {lastChild}
    </div>
  );
}

function ChildA() {
  console.log(`Child A`);
  return <div>ChildA</div>;
}

function ChildB() {
  console.log('Child B');
  return <div>ChildB</div>;
}

function ChildC() {
  console.log('Child C');
  return <div>Child C</div>;
}
