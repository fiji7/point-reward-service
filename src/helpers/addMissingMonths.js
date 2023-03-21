export const addMissingMonths = (users, timeScope) => {
    const months = timeScope;
    const result = [];

    for (const user of users) {
      const userMonths = users.filter(u => u.id === user.id).map(u => u.month);
      const missingMonths = months.filter(month => !userMonths.includes(month));
      const firstMonth = userMonths[0];
  
      for (const month of missingMonths) {
        result.push({
          id: user.id,
          name: user.name,
          month: month,
          points: 0,
          amount: 0
        });
      }
  
      if (!firstMonth) {
        result.push({
          id: user.id,
          name: user.name,
          month: months[0],
          points: 0,
          amount: 0
        });
      }
    }

    const removeDuplicates = result.filter((record, index) => {
      const key = `${record.id}-${record.month}`;
      return index === result.findIndex(r => `${r.id}-${r.month}` === key);
    });
  
    return [...users, ...removeDuplicates];
  }