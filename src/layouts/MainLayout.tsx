type IMainLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: IMainLayout) => {
  return <div>{children}</div>;
};

export default MainLayout;
