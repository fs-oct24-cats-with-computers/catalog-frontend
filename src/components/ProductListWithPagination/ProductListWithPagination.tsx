import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ReactPaginate from 'react-paginate';

import './ProductList.scss';
import './Pagination.scss';
// import { ProductCard } from '../ProductCard/ProductCard';

type PropsType = {
  products: Product[];
};

export const ProductsListWithPagination: React.FC<PropsType> = ({
  products,
}) => {
  const [itemOffset, setItemOffset] = useState(0);

  const [currentItems, setCurrentItems] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemsPerPage, itemOffset, products]);

  interface PaginationAction {
    selected: number;
  }

  const handlePageClick = (event: PaginationAction) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* filters */}
      <label
        htmlFor="itemsPerPage"
        className="product-list__selectionLabel"
      >
        Items per Page
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        className="product-list__select"
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        <option value={16}>16</option>
        <option value={32}>32</option>
        <option value={64}>64</option>
      </select>

      {/* <div className="product-list__list"> */}
      {currentItems.map((phone) => (
        <p
          key={phone.id}
          className="product-list__item"
        >
          {phone.name}
        </p>
        // <ProductCard
        //   key={phone.id}
        //   product={phone}
        // />
      ))}
      {/* </div> */}

      {/* <div className="product-list__list">
        {currentItems.map((product) => (
          <div className="product-list__card">
            <ProductCard product={product} />
          </div>
        ))}
      </div> */}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pagination-page" // page button
        activeLinkClassName="pagination-active" // active page button
        previousLinkClassName="pagination-prev" // 'back' page button
        nextLinkClassName="pagination-next" // 'next' page button
        disabledClassName="pagination-disabled" // disabled pahe button
        breakClassName="pagination-break"
      />
    </>
  );
};
