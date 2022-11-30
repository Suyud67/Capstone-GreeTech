import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function BtnAddProduct() {
  return (
    <div className="btn-add">
      <Link to={'/Add'} className="block p-4">
        <FaPlus />
      </Link>
    </div>
  );
}
