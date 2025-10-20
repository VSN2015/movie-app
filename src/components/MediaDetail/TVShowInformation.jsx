import React from 'react';

const TVShowInformation = ({ tvInfo = {} }) => {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{tvInfo.original_name}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p>
          {(tvInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/32x24/${countryCode.toLowerCase()}.png 2x,
                https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png 3x`}
              width="16"
              height="12"
              alt={countryCode}
              className="mt-1 mr-1"
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{tvInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Network</p>
        {(tvInfo.networks || []).map((network) => (
          <img
            className="my-2 block h-2.5 invert-75"
            key={network.id}
            src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TVShowInformation;
