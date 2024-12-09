---
permalink: /
title: #"academicpages is a ready-to-fork GitHub Pages template for academic personal websites"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m a PhD Student at UC San Diego dedicated to building AI systems capable of robust decision making and human-like perception. Natural selection had to work with a number of constraints to design the human brain, which may or may not be necessary to include as priors in our machine learning models. I believe a principled yet intuitive approach is the way forward: Determine the biases based on human cognition to bring into today's best model architectures. Relying on scale alone will not be sufficient to solve issues with robustness, interpretability, and truthfulness, especially in regimes interacting with humans. I'm currently advised by Prof. [Zhiting Hu](https://zhiting.ucsd.edu/), and collaborating with Prof. [Yilun Du](https://yilundu.github.io/) at Harvard. Previously I worked with Prof. Bruno Olsahusen at UC Berkeley's [Redwood Center for Theoretical Neuroscience](https://redwood.berkeley.edu/), with Prof. Kurt Keutzer at [BAIR](https://bair.berkeley.edu), and as a founding research scientist at [New Theory AI](https://www.newtheory.ai/). 


Some current fascinations:
- **Using world models for decision making**: The ability to predict what will happen in the future implies understanding the world itself. I believe to make complex decisions in a complex world, this capability is necessary. How can we build models that learn these world models from data, and use them for decision making? 
- **Modeling uncertainty about the future**: Instead of taking just one sample of what the future could be like, and then constraining your generation based on that, can generative models explicitly model inherent uncertainty about the future? A simple example: I think my opponent will move left with 75% probability, and right with 25% probability, but not forward or backward. Compared to just using the most likely sample of moving left as conditioning, my entire distribution contains more information that can help me make decisions about what to do next, i.e. can help construct a better world model. 
- **Memory conditioned generation**: Today's RL models can work quite well on a static environment where they only are required to do one task with a clear goal. Generative models for tasks like video generation suffer from inconsistencies for their time series data output. I believe both of these are symptoms of models' lack of memory. The correct latent space needs to be filled with semantically useful data related to the task at hand to condition generation of actions or other output modalities. Specifically, how can the model learn a representation space optimal for storing only what is necessary to remember, and learn to fill its own memory?
- **Compositional generative modeling**: Humans understand the world's factorial components, able to recombine them to solve new examples never seen before. From a raw dataset, how can these factors be discovered and then composed to solve out of distribution generalization problems? 
- **Other topics**: Emergent hierarchy, visual representations, subjective reality in ML models, evolution, history, geopolitics. 


A selection of my favorite books: 
- [On Intelligence](https://www.goodreads.com/book/show/27539.On_Intelligence): Jeff Hawkins, 2004. 
- [Alexander Hamilton](https://www.goodreads.com/book/show/16130.Alexander_Hamilton): Ron Chernow, 2004.
- [The Great Gatsby](https://www.goodreads.com/book/show/4671.The_Great_Gatsby): F. Scott Fitzgerald, 1925.
- [The Three Body Problem](https://www.goodreads.com/book/show/20518872-the-three-body-problem) and trilogy: Liu Cixin, 2006.
- [The Vital Question](https://www.goodreads.com/book/show/26530386-the-vital-question?from_search=true&from_srp=true&qid=exeAdqqoQB&rank=1): Nick Lane, 2015. 

A selection of my favorite textbooks: 
- [Probabilistic Machine Learning](https://probml.github.io/pml-book/book1.html): Kevin Murphy, 2022.
- [Foundations of Computer Vision](https://mitpress.mit.edu/9780262048972/foundations-of-computer-vision/): Antonio Torralba, Phillip Isola, Bill Freeman, 2024. 
- [Principles of Neural Design](https://mitpress.mit.edu/9780262534680/principles-of-neural-design/): Peter Sterling, Simon Laughlin, 2015
- Soon to be among them: [Bayesian Models of Cognition: Reverse Engineering the Mind](https://mitpress.mit.edu/9780262049412/bayesian-models-of-cognition/): Thomas Griffiths, Nick Chater, Josh Tenenbaum, 2024. 

<!-- Here are some directions I'm intersted in right now:
- Building **better memory augmented models** to improve reasoning and factuality capabilities. Current retrieval augmentation utilizes static large databases that the model does not choose to remember. A joint training regime such that the model can separate memorization from reasoning in its parametric weights will be a key piece of future models.
- Identifying the correct **geometry and structure** to use as inductive priors in computer vision models for better interpretability and provable generalizability. We should have a deep understanding for the reason of each piece of the model's architecture, and design new components with idealized properties in mind, such as whether we can use those activations to interpret the model's decision making. 
- Realizing multimodal reasoning and self-consistency in a **unified multimodal foundation model**. Does it make sense to use a joint embedding scheme and force the model to figure out that text in an image and the tokenized text representation are actually the same? Will this be sufficient beyond surface level multimodal alignment? -->



<!-- I have extensive technical experience implementing ML architectures using Python, PyTorch, and HuggingFace Transformers, and theoretical background in neuroscience, cognitive modeling, and linear algebra. Currently I am interested in exploring: 1. Identifying the correct geometry and structure to use as inductive priors in models for better interpretability and provable generalizability. 2. Using human cognition (Context memory, long term memory, theories of human reasoning, etc.) as inspiration for improving reasoning and factuality capabilities in LLMs. 3. Realizing multimodal reasoning and self-consistency in a unified multimodal foundation model. -->

<!-- 
A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
2. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
3. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
4. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
5. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
6. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
