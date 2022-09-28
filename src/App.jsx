import Header from './organisms/Header';
import Layout from './templates/Layout'
import InformationContent from './organisms/InformationContent';
import Footer from './molecules/Footer'

function App() {
  
  return (
    <>
      <Header></Header>

      <Layout>
        <InformationContent></InformationContent>

        <Footer></Footer>
      </Layout>
       
    </>

  );
}

export default App;
