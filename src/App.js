
import './App.css';
import Main1 from "./component/Main";
import Footer1 from "./component/Footer";

function App() {
  return (
    <>
    <div class="grid2x2">
  <div class="box box1"><div className='boxcontent'><Main1/><Footer1/></div></div>
  <div class="box box2"><div className='boxcontent'><Main1/><Footer1/></div></div>
  <div class="box box3"><div className='boxcontent'><Main1/><Footer1/></div></div>
  <div class="box box4"><div className='boxcontent'><Main1/><Footer1/></div></div>
</div>
    </>
  );
}

export default App;
