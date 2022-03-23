import React from "react";

function MainCell({ times }) {
  return (
    <>
      <tbody>
        {times.map((time, index) => (
          <tr key={index}>
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{index + 1} Ramadhan 1443 H</td>
            <td className="text-center">{time.date}</td>
            <td className="text-center">{time.imsak}</td>
            <td className="text-center">{time.subuh}</td>
            <td className="text-center">{time.syuruk}</td>
            <td className="text-center">{time.dhuha}</td>
            <td className="text-center">{time.dzuhur}</td>
            <td className="text-center">{time.ashar}</td>
            <td className="text-center">{time.maghrib}</td>
            <td className="text-center">{time.isya}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default MainCell;
