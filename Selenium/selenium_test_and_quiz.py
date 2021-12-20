from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get("http://localhost:3000/employee")

##hyperlink=driver.find_element_by_link_text('This is a link')
##hyperlink.click()

textbox=driver.find_element_by_name('fullName')
textbox.send_keys('namasthe')

textbox1=driver.find_element_by_name('email')
textbox1.send_keys('namasthe@gmail.com')

textbox2=driver.find_element_by_name('query')
textbox2.send_keys('select count(*) from fb where age>25')

textbox2=driver.find_element_by_name('city')
textbox2.send_keys('Hyderabad')

# submit=driver.find_element_by_class_name('btn btn-info')
# submit.click()

# driver.find_element_by_css_selector('button.btn-info').click()

driver.find_element_by_class_name('button.btn-info').submit()