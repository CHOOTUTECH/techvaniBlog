# टेकवाणी (TechVani) – Django REST API लोकल सेटअप गाइड

यह गाइड आपको अपने कंप्यूटर (लोकल मशीन) में Django REST Framework बैकएंड सेटअप करने में मदद करेगी।

---

## 🚀 1. क्विक स्टार्ट (Quick Start)

### चरण 1: वर्चुअल एनवायरनमेंट बनाएं और एक्टिवेट करें
\`\`\`bash
# नया फोल्डर बनाएं
mkdir techvani-backend
cd techvani-backend

# वर्चुअल एनवायरनमेंट बनाएं
python -m venv venv

# Windows में एक्टिवेट करें:
venv\\Scripts\\activate

# Mac/Linux में एक्टिवेट करें:
source venv/bin/activate
\`\`\`

### चरण 2: आवश्यक पैकेज इंस्टॉल करें
\`\`\`bash
pip install django djangorestframework django-cors-headers django-filter pillow
\`\`\`

### चरण 3: Django प्रोजेक्ट और ऐप बनाएं
\`\`\`bash
django-admin startproject config .
python manage.py startapp blog
\`\`\`

---

## ⚙️ 2. सेटिंग्स कॉन्फ़िगरेशन (`config/settings.py`)

`config/settings.py` में निम्नलिखित जोड़ें:

\`\`\`python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # 3rd Party Apps
    'rest_framework',
    'corsheaders',
    'django_filters',
    
    # Local Apps
    'blog',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', # सबसे ऊपर रखें
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# React Frontend से CORS अनुमति
CORS_ALLOW_ALL_ORIGINS = True # या CORS_ALLOWED_ORIGINS = ["http://localhost:3000", "http://localhost:5173"]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
}
\`\`\`

---

## 🗄️ 3. डेटाबेस मॉडल्स (`blog/models.py`)

\`\`\`python
from django.db import models
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, default='terminal')
    
    # Backend SEO Fields
    meta_title = models.CharField(max_length=255, blank=True, help_text="Custom Google SERP Title")
    meta_description = models.TextField(blank=True, help_text="Custom Google SERP Meta Description")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    avatar = models.URLField(max_length=500)
    bio = models.TextField()
    twitter = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, max_length=255)
    excerpt = models.TextField()
    content = models.TextField()
    cover_image = models.URLField(max_length=500)
    category = models.ForeignKey(Category, related_name='articles', on_delete=models.CASCADE)
    author = models.ForeignKey(Author, related_name='articles', on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)
    published_at = models.DateTimeField(auto_now_add=True)
    reading_time_minutes = models.PositiveIntegerField(default=5)
    views_count = models.PositiveIntegerField(default=0)
    comments_count = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    product_price = models.CharField(max_length=50, blank=True)

    # 🚀 Backend-Driven SEO & Google SERP Control
    meta_title = models.CharField(
        max_length=255, 
        blank=True, 
        help_text="Google Search Title (यदि खाली छोड़ेंगे तो आर्टिकल का title उपयोग होगा)"
    )
    meta_description = models.TextField(
        blank=True, 
        help_text="Google Search Meta Description (120-160 अक्षर अनुशंसित)"
    )
    canonical_url = models.URLField(blank=True, help_text="Canonical URL (वैकल्पिक)")
    keywords = models.CharField(max_length=500, blank=True, help_text="Comma-separated keywords")
    og_image = models.URLField(blank=True, help_text="Social Share Preview Image (वैकल्पिक)")
    schema_type = models.CharField(
        max_length=50, 
        default='TechArticle', 
        choices=[
            ('TechArticle', 'Tech Article'),
            ('NewsArticle', 'News Article'),
            ('Product', 'Product Review'),
            ('HowTo', 'How-To Guide'),
        ]
    )

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title

class StaticPage(models.Model):
    """About Us, Privacy Policy, Terms, Contact आदि को बैकएंड से मैनेज करने के लिए"""
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    content = models.TextField()
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    article = models.ForeignKey(Article, related_name='comments', on_delete=models.CASCADE)
    author_name = models.CharField(max_length=100)
    author_email = models.EmailField(blank=True)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author_name} on {self.article.title}"
\`\`\`

---

## 📜 4. सीरियलाइजर्स (`blog/serializers.py`)

\`\`\`python
from rest_framework import serializers
from .models import Article, Category, Author, Tag, Comment

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = AuthorSerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
\`\`\`

---

## 🎯 5. व्यूज (`blog/views.py`)

\`\`\`python
from rest_framework import viewsets, filters, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from .models import Article, Category, Tag, Comment
from .serializers import ArticleSerializer, CategorySerializer, TagSerializer, CommentSerializer

class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category__slug', 'tags__slug']
    search_fields = ['title', 'excerpt', 'content']
    ordering_fields = ['views_count', 'published_at', 'rating']

    @action(detail=False, methods=['get'])
    def trending(self, request):
        limit = int(request.query_params.get('limit', 5))
        trending = Article.objects.order_by('-views_count')[:limit]
        serializer = self.get_serializer(trending, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get', 'post'])
    def comments(self, request, slug=None):
        article = self.get_object()
        if request.method == 'POST':
            serializer = CommentSerializer(data={**request.data, 'article': article.id})
            if serializer.is_valid():
                serializer.save()
                article.comments_count += 1
                article.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        comments = article.comments.order_by('-created_at')
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class TagViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'slug'
\`\`\`

---

## 🔗 6. URLs सेटअप (`config/urls.py`)

\`\`\`python
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import ArticleViewSet, CategoryViewSet, TagViewSet

router = DefaultRouter()
router.register(r'articles', ArticleViewSet, basename='article')
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'tags', TagViewSet, basename='tag')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
]
\`\`\`

---

## 🏃 7. माइग्रेशन और सर्वर रन करें

\`\`\`bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
\`\`\`

अब आपका Django सर्वर `http://127.0.0.1:8000/api/v1/` पर चलेगा! 

### React Frontend से कैसे जोड़ें:
Frontend के `.env` में यह लाइन जोड़ें:
\`\`\`env
VITE_DJANGO_API_BASE_URL="http://127.0.0.1:8000/api/v1"
\`\`\`
बस! Frontend अपने आप आपके Django सर्वर से कनेक्ट हो जाएगा।
जब Django सर्वर बंद रहेगा, तब भी वेबसाइट बिना किसी क्रैश के सुचारू रूप से चलेगी।
