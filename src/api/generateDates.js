function generateDates(customers) {
    const currentDate = new Date(); 
    const pastDate = new Date();
    pastDate.setMonth(currentDate.getMonth() - 5); 
  
    customers.forEach(customer => {
      const originalDate = new Date(customer.date);
      if (originalDate > pastDate) { 
        const newDate = new Date(pastDate.getTime() + Math.random() * (currentDate.getTime() - pastDate.getTime())); 
        customer.date = `${newDate.getMonth() + 1}-${newDate.getDate()}-${newDate.getFullYear()}`;
      }
    });
    return customers;
  };

  module.exports = { generateDates }