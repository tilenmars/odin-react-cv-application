const Jobs = (props) => {
  console.log(props);
  return (
    <>
      {savedJobData.length > 0
        ? savedJobData.map((data) => (
            <Card
              title={data.companyName}
              dataField1={data.startDate}
              dataField2={data.endDate}
            />
          ))
        : console.log("wrong")}
    </>
  );
};
export default Jobs;
