#!/bin/bash

# Script to ping search engines with your sitemap URL
# This should be run after a successful deployment

SITEMAP_URL="https://www.agungferdi.com/sitemap.xml"

# Ping Google
curl "https://www.google.com/ping?sitemap=$SITEMAP_URL"
echo "Pinged Google with sitemap: $SITEMAP_URL"

# Ping Bing
curl "https://www.bing.com/ping?sitemap=$SITEMAP_URL"
echo "Pinged Bing with sitemap: $SITEMAP_URL"
