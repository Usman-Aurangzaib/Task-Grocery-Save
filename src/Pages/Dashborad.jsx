import React, { useEffect, useState } from "react";
import { useStore } from "../store/GroceryStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const {
    state,
    fetchCategories,
    addCategory,
    selectCategory,
    addItem,
    saveList,
    deleteItem,
    deleteCategory,
    toggleItemCompletion,
    clearCurrentList,
  } = useStore();

  const [newCategoryName, setNewCategoryName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleAddCategory = async () => {
    if (newCategoryName.trim()) {
      try {
        await addCategory(newCategoryName);
        setNewCategoryName("");
      } catch (error) {
        console.error("Error adding category:", error);
      }
    }
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem(newItem);
      setNewItem("");
    }
  };

  const handleCategoryClick = (categoryId) => {
    selectCategory(categoryId === state.selectedCategory ? null : categoryId);
  };

  const handleSaveList = async () => {
    if (listTitle.trim() && state.currentList.items.length > 0) {
      try {
        await saveList(listTitle);
        setShowModal(false);
        setListTitle("");
        fetchCategories();
      } catch (error) {
        console.error("Error saving list:", error);
      }
    } else {
      alert("Please provide a title and add at least one item.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setListTitle("");
    clearCurrentList();
  };

  const handleDeleteCategory = async (categoryId, e) => {
    e.stopPropagation(); // Prevent category selection when deleting
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(categoryId);
        if (state.selectedCategory === categoryId) {
          selectCategory(null);
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const handleDeleteItem = async (categoryId, itemId) => {
    try {
      await deleteItem(categoryId, itemId);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="d-flex">
      {/* Navigation Bar */}
      <nav className="fixed-top bg-white border-bottom shadow-sm pl-5">
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-success me-2"
              >
                <path d="m15 11-1 9"></path>
                <path d="m19 11-4-7"></path>
                <path d="M2 11h20"></path>
                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path>
                <path d="M4.5 15.5h15"></path>
                <path d="m5 11 4-7"></path>
                <path d="m9 11 1 9"></path>
              </svg>
              <span className="fw-bold text-dark fs-4">GrocerySave</span>
            </div>
            <div className="d-flex align-items-center">
              <p className="text-secondary me-4 mb-0">Welcome</p>
              <button className="btn btn-success" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Sidebar */}
      <div
        className="d-flex flex-column bg-white border-end shadow-sm vh-100"
        style={{ width: "250px" }}
      >
        <div className="p-4 mt-4">
          <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
            <h2 className="fs-5 fw-semibold">Categories</h2>
            <button
              className="btn btn-outline-success btn-sm"
              title="Add Category"
              onClick={() => handleCategoryClick("newCategory")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>
          <ul className="list-group">
            {state.categories.map((category) => (
              <li
                key={category._id}
                className="d-flex justify-content-between p-2 align-items-center"
              >
                <span
                  onClick={() => handleCategoryClick(category._id)}
                  style={{ cursor: "pointer" }}
                  className={
                    state.selectedCategory === category._id ? "fw-bold" : ""
                  }
                >
                  {category.name}
                </span>
                <IoCloseOutline
                  size={20}
                  onClick={(e) => handleDeleteCategory(category._id, e)}
                  style={{ cursor: "pointer" }}
                  className="text-danger"
                />
              </li>
            ))}
          </ul>
          {state.selectedCategory === "newCategory" && (
            <div className="mt-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="New category name"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <button
                className="btn btn-success w-100"
                onClick={handleAddCategory}
              >
                Add Category
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 bg-light pt-5 px-4">
        {state.selectedCategory && state.selectedCategory !== "newCategory" && (
          <div className="mt-4 rounded-lg shadow-xl p-4">
            <button
              className="btn btn-success justify-content-between p-3 mb-3"
              onClick={() => setShowModal(true)}
            >
              <IoAdd className="" size={26} />
              Add List
            </button>

            {/* Add List Modal */}
            {showModal && (
              <div
                className="modal show d-block"
                style={{ display: "block" }}
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add New List</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3">
                          <label className="form-label">List Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter list title"
                            required
                            value={listTitle}
                            onChange={(e) => setListTitle(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Add Items</label>
                          <div className="input-group mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Item name"
                              value={newItem}
                              onChange={(e) => setNewItem(e.target.value)}
                            />
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={handleAddItem}
                            >
                              Add Item
                            </button>
                          </div>
                        </div>
                        <div className="bg-light rounded-md p-2">
                          {state.currentList.items.length > 0 ? (
                            <ul className="list-unstyled mb-0">
                              {state.currentList.items.map((item, index) => (
                                <li key={index} className="py-1">
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-center text-muted mb-0">
                              No items added
                            </p>
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSaveList}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Display Saved Lists */}
        {state.selectedCategory &&
          state.categories
            .find((cat) => cat._id === state.selectedCategory)
            ?.items.map((list, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 mb-2"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="text-success mb-0">{list.name}</h5>
                  <MdDelete
                    size={28}
                    color="red"
                    onClick={() =>
                      handleDeleteItem(state.selectedCategory, list._id)
                    }
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <ul className="list-unstyled mt-3 mb-0">
                  {list.items.map((item, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center py-2"
                      onClick={() =>
                        toggleItemCompletion(
                          state.selectedCategory,
                          list._id,
                          item._id
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          item.completed ? "text-success" : "text-secondary"
                        }
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        {item.completed && <path d="M9 12l2 2 4-4" />}
                      </svg>
                      <span
                        className={`ms-3 ${
                          item.completed
                            ? "text-decoration-line-through text-muted"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

        {/* Loading State */}
        {state.loading && (
          <div className="text-center py-4">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {state.error && (
          <div className="alert alert-danger mt-4" role="alert">
            {state.error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
