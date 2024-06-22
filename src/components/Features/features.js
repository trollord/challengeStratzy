import * as React from 'react';


// the component should take 3 props one image, one title and one description

export default function Features({ category, image, title, description }) {
    return (
      
      <div className="w-[185px] h-[205px] max-w-sm p-4 rounded-lg text-white">
      <p className="text-[12px] text-sm font-dm-serif">{category}</p>
        <div className="flex items-center mb-4">
          <img src={image} alt={title} className="w-12 h-12 mr-4" />
          <h2 className="text-lg font-dm-sanz">{title}</h2>
        </div>
        <p className="text-dark-text-opac-70">{description}</p>
      </div>
    );
};