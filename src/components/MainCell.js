import React from "react";

function MainCell({ data }) {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={item.date} value={item}>
          <td className="text-center">{index}</td>
          <td className="text-center">{index} Ramadhan 1443 H</td>
          <td className="text-center">{item.date}</td>
          <td className="text-center">{item.imsak}</td>
          <td className="text-center">{item.subuh}</td>
          <td className="text-center">{item.syuruk}</td>
          <td className="text-center">{item.dhuha}</td>
          <td className="text-center">{item.dzuhur}</td>
          <td className="text-center">{item.ashar}</td>
          <td className="text-center">{item.maghrib}</td>
          <td className="text-center">{item.isya}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default MainCell;
