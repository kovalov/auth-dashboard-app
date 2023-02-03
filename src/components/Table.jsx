import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const Table = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const [item1] = await pb.collection('products').getFullList(200);
    console.log(item1);
    // setData(records);
    // console.log(records);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <figure>
      <table>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="col">#</th>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
          </tr>
        </tfoot>
      </table>
    </figure>
  );
};
