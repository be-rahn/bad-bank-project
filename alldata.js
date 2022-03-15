function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      {ctx.users.map((ctx, i) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            key={i}
            bgcolor="info"
            txtcolor="black"
            header={"Account information for: " + ctx.name}
            title={"Balance: $" + ctx.balance}
            text={"Email: " + ctx.email}
            body={"Password: " + ctx.password}
          />
        </div>
      ))}
    </>
  );
}
