# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: - A change to the database can be made by running the command: rails g migration, adding the foregin key, student id and then run a rails db:migrate to update the schema. 

  Researched answer: -  To correct the mistake: 
  Step 1: run the command 'rails generate migration', add a new column to the table.
  Step 2: add_column :students, :cohort_id, :integer'
  Step 3: lastly, in terminal, run  'rails db:migrate'.
  

2. Which RESTful routes must always be passed params? Why?

  Your answer: - The RESTFUL routes that always be passed are: sho, updat and destroy. These params are strickand allow certain properties to be accessible. 

  Researched answer: - RESTful routes are alway passed pararms because, Parameters are attached to the URL and helps to retrieve specific data and performs actions based on the inputs passed by the user. 

3. Name three rails generator commands. What is created by each?

  Your answer:
rails generate model - create the file class
rails generate controller - creates ruby file the controller lives in
rails generate migration- changes the data base, writing to the schema, modifing it. 

  Researched answer: 
- rails generate mode - Adds database records, adding rows to the table, find particular data you're looking for, update that data, or remove data

- rails generate controller - the logical center of your application. It coordinates the interaction between the user, the views, and the model. The controller is also a home to a number of important ancillary services. It is responsible for routing external requests to internal actions.

- rails generate migration - Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables. After reading this guide, you will know: The generators you can use to create them.
Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables. After reading this guide, you will know: The generators you can use to create them.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students:    
The controller method of "index" will be called, it will show all entries students listed in the database table.   

action: "POST"   route: /students:     
The controller method of "create" will be called, adding new instance of content to the database table.

action: "GET"    route: /students:
The controller method of "new" will be called, to get a new form to create a new student to database. 

action: "GET"    route: /students/2: 
The controller method of "show" will be called, showing an instance of student id of student 2. 

action: "GET"    route: /students/2/:   
The controller method of "edit" will be called, returning a form the user can edit the information of student 2. 

action: "PATCH"  route: /students/2: 
The controller method of "update" will be called, updating new content of studnet 2. 

action: "DELETE" route: /students/2: 
The controller method of "destroy" will remove all content of student 2 from the database.      


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

 As a user, I have the folloiwng lists: To do, Doing, Done
  1. As a user, I see a to do list that can help organize task(s).
  2. As a user, I can create additional lists.
  3. As a user, I can edit my to do list, marking pending or completed.
  4. As a user, I can add additional task to my to do list(s).  
  5. As a user, I can see due dates/deadlines of my task list, modify if need. 
  6. As a user, I can click on my do list(s).
  7. As a user, I can move list around in tabs/folders, change fonts/color.
  8. As a user, I can name my task task list
  9. As a user, I can share my to do list
  10. As a user, I can delete my to do list

