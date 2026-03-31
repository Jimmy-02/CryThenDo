const Footer = ({ activeTasksCount = 0, completedTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                Congrate you have completed {completedTasksCount} tasks
                {activeTasksCount > 0 &&
                  `, only ${activeTasksCount} tasks left. Keep going!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Let's start with {activeTasksCount} tasks!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
