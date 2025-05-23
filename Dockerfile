FROM php:8.2-apache

# Copy semua file ke folder Apache
COPY . /var/www/html/

# Buka port 80
EXPOSE 80
