import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='flex items-center justify-center p-4'>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    
  );
}

export default Loader;