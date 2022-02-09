# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This class, show a class which has been inherited from the ApplicationController
class BlogPostsController < ApplicationController

  def index
    # ---2) This method is a Get request that will return all the instances of BlogPost. 
    @posts = BlogPost.all
  end

  def show
    # ---3) This method of show (view) will return by HTML all the specific paramenters by ID.
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method will allow a new instance for a new posting to BlogPost, rendering a new form. However if it has not been created in the database, it will disappear when BlogPost is closed out. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This method post a strong parameter, that will ensure personal information be secured, if tthe wrong information is entered, the page will be redirected back to the main page. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) This method allows for edit, by the parameters ID, will render an edit form. Form  will not save any edits made if not created in database. Will render the edit form 
  def edit This method allows for edit 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This method allows for update of new changes, by stong parameters ID, but will not save any edits made if not created in database. Only the title an content 
    
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy reates 
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This method delete(destroy), if it fails, then it will redirect back to the page the page that the user wants deleted.   
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This method restricts anything below can be used on this page. 
  private 
  def blog_post_params
    # ---10) Params will make only the :title and :content of :blog_post available on page, this will keep the page private
    params.require(:blog_post).permit(:title, :content)
  end
end
