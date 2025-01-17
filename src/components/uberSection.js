import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'; // Replace with actual icons

const UberSection = () => {
  return (
    <section className="bg-uberColor py-12 px-4 lg:px-8 mt-[-300px] lg:mt-0">
        
      <div className="max-w-6xl mx-auto text-center pt-[700px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Uber Section Heading</h2>
        <p className="text-lg md:text-xl text-white mt-4">This is a subtitle for the Uber section.</p>
        <div className="flex justify-center space-x-8 mt-8">
          <FontAwesomeIcon icon={faHome} className="text-white w-12 h-12" />
          <FontAwesomeIcon icon={faHome} className="text-white w-12 h-12" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="path/to/image1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">Heading 1</h3>
          <p className="text-gray-700 mt-2">Description for the first image box. This is a brief description.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="path/to/image2.jpg" alt="Image 2" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">Heading 2</h3>
          <p className="text-gray-700 mt-2">Description for the second image box. This is a brief description.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="path/to/image3.jpg" alt="Image 3" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-semibold mt-4">Heading 3</h3>
          <p className="text-gray-700 mt-2">Description for the third image box. This is a brief description.</p>
        </div>
      </div>
    </section>
  );
};

export default UberSection;