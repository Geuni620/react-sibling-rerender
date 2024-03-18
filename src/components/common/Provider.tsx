type ProviderProps = {
  //   children: (render: string) => React.ReactNode;
  children: React.ReactNode;
  text: string;
};

export const Provider: React.FC<ProviderProps> = ({ children, text }) => {
  const render = 'Hello, world!';

  //   return <div>{children(render)}</div>;

  return <div text={text}>{children}</div>;
};
