export default function CarPage({ params }: any) {
  return (
    <div style={{background:"black",color:"white",height:"100vh",padding:"40px"}}>
      <h1>Car Page</h1>
      <p>Car: {params.slug}</p>
    </div>
  );
}