import React, { useState, useRef, useEffect } from "react";
import "../../css/list-item-box.css";
import "../../css/input.css";
import "../../css/sizing.css";
import { PropTypes } from "prop-types";
import OrderItem from "../../logic/Orders/OrderItem";
import { connect } from "react-redux";
import { modifyOrderItem } from "../../store/actions/orderItems";

const ItemBox = ({
  itemId,
  item,
  modifyItem,
  numberOnTheList,
  newlyAdded,
  removeNewlyAddedTag,
}) => {
  const [input, setInput] = useState({
    productName: item.productName,
    productDescription: item.productDescription,
  });

  const productNameRef = useRef(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    if (newlyAdded) {
      productNameRef.current.focus();
    }
  });

  const handleModifyItem = () => {
    modifyItem(itemId, { ...item, ...input });
  };

  return (
    <div
      className="card"
      onFocus={() => {
        console.log("Focus");
      }}
      onBlur={() => {
        console.log("Lost focus");
      }}
    >
      <div className="item-title flex">
        <div>{`#${numberOnTheList}`}</div>
        <div className="emptySpace"> </div>
        <input
          type="text"
          name={"productName"}
          placeholder="Produkt (np. jabłka)"
          value={`${input.productName}`}
          onChange={onChange}
          ref={productNameRef}
          onBlur={() => {
            handleModifyItem();
            removeNewlyAddedTag();
          }}
        />
      </div>
      <textarea
        type="text"
        name={"productDescription"}
        placeholder="Opis (np. 3 sztuki, 20 dag)"
        value={`${input.productDescription}`}
        onChange={(e) => {
          onChange(e);
        }}
        onBlur={handleModifyItem}
      />
    </div>
  );
};

ItemBox.propTypes = {
  itemId: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  modifyItem: PropTypes.func.isRequired,
  numberOnTheList: PropTypes.number.isRequired,
  newlyAdded: PropTypes.bool.isRequired,
  removeNewlyAddedTag: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { itemId } = ownProps;
  return {
    item: { ...state.orderItems[itemId] },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyItem: (id, props) => {
      dispatch(
        modifyOrderItem({
          id,
          props: { ...props },
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemBox);
