import { useState, useCallback } from "react";

const useTrajectory = () => {
  const [isTrajectoryVisible, setIsTrajectoryVisible] = useState(false);

  const showTrajectory = useCallback(() => {
    setIsTrajectoryVisible(true);
  }, []);

  const hideTrajectory = useCallback(() => {
    setIsTrajectoryVisible(false);
  }, []);

  return {
    isTrajectoryVisible,
    showTrajectory,
    hideTrajectory,
  };
};

export default useTrajectory;
