import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">About me</h2>
      <p className="text-center text-gray-600 max-w-2xl mb-6">
        Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. 
        Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.
      </p>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-full mb-8">
        Resume
      </button>
      
      <div className="flex items-center space-x-4 mb-4">
        <a href="#" className="text-gray-700">
          <i className="fab fa-instagram"></i> {/* Replace with actual icon component */}
        </a>
        <a href="#" className="text-gray-700">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-700">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="text-gray-500">&copy; Madelyn Torff 2021</p>
    </section>
  );
}
