function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        bgcolor="success"
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the Bank"
        text="Please create an account and then login in order to make transactions"
        body={
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
    </div>
  );
}
