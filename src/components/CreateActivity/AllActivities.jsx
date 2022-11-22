 import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  "./AllActivities.modules.css";
import { filterByActivity, getAllActivities } from "../../redux/actions";

const AllActivities = () => {
  const totalActivities = useSelector((state) => state.activities);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch])

  const handleOnChange = (e) => {
    e.preventDefault();
   dispatch(filterByActivity(e.target.value));
  };

  return (
    
      <select  onChange={(e) => handleOnChange(e)}>
        <option key="defaultValue" hidden value="All">All activities</option>
        {totalActivities.map((act) => {
          return (
            <option value={act.name} key={act.id}> {act.name} </option>
          );
        })}
      </select>
  );
};

export default AllActivities; 