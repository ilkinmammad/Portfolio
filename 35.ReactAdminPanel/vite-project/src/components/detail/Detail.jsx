import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';
import { useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
  const { detail } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    dispatch(addBasket(detail));
    navigate('/basket');
  };

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div className="detail-image">
          <img src={detail.image} alt={detail.title} />
        </div>
        <div className="detail-info">
          <h2 className="detail-title">{detail.title}</h2>
          <p className="detail-desc">{detail.description}</p>
          <p className="detail-category"><strong>Kateqoriya:</strong> {detail.category}</p>

          <div className="detail-footer">
            <span className="detail-price">${detail.price}</span>
            <button className="detail-button" onClick={handleAddToBasket}>Add to basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
