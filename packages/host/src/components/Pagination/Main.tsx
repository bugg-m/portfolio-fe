import PageButtonGroup from "./Components/PageButtonGroup";

const Main = () => {
  const getCurrentPage = (page: number) => {
    console.log(page);
  };
  return (
    <div className="m-5">
      <PageButtonGroup
        currentPage={4}
        getCurrentPage={getCurrentPage}
        pageSize={10}
      />
    </div>
  );
};

export default Main;
