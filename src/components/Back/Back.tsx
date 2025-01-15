import ArrowLeft from '../../../public/icons/Chevron (Arrow Left).svg?react';
import { useNavigate } from 'react-router-dom';

export const Back = () => {
  const navigate = useNavigate();

  return (
    <div
      className="back"
      onClick={() => navigate('..')}
    >
      <ArrowLeft className="back__icon" />
      <span className="back__text">Back</span>
    </div>
  );
};
