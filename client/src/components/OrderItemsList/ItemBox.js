import React, { useState, useRef, useEffect } from "react";
import "../../css/list-item-box.css";
import "../../css/input.css";
import "../../css/sizing.css";
import "../../css/buttons.css";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { modifyOrderItem } from "../../store/actions/orderItems";
import { blurOnEnter } from "../../domjs/inputControls";
import {
  orderItemTitlePlaceholder,
  orderItemSubtitlePlaceholder,
} from "../../logic/Orders/OrderItem";

const ItemBox = ({
  id,
  itemId,
  item,
  language,
  modifyItem,
  numberOnTheList,
  newlyAdded,
  removeNewlyAddedTag,
  deleteItem,
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
  }, [newlyAdded]);

  const handleModifyItem = () => {
    modifyItem(itemId, { ...item, ...input });
  };

  return (
    <div
      id={id}
      className="card"
      onFocus={() => {
        console.log("Focus");
      }}
      onBlur={() => {
        console.log("Lost focus");
      }}
    >
      <div className="item-title flex-space-between">
        <div className="flex">
          <div>{`#${numberOnTheList}`}</div>
          <div className="emptySpace"> </div>
          <input
            type="text"
            name={"productName"}
            placeholder={orderItemTitlePlaceholder[language]}
            value={`${input.productName}`}
            onChange={onChange}
            ref={productNameRef}
            onBlur={() => {
              handleModifyItem();
              removeNewlyAddedTag();
            }}
            onKeyDown={blurOnEnter}
          />
        </div>
        <div className="delete-button" onClick={deleteItem}>
          <div className="list-header-button-box-sm delete-button-fill" />
        </div>
      </div>
      <textarea
        type="text"
        name={"productDescription"}
        placeholder={orderItemSubtitlePlaceholder[language]}
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
  // Data
  itemId: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  modifyItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,

  // UI
  newlyAdded: PropTypes.bool.isRequired,
  removeNewlyAddedTag: PropTypes.func.isRequired,
  numberOnTheList: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { itemId } = ownProps;
  return {
    item: { ...state.orderItems[itemId] },
    language: state.language,
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
