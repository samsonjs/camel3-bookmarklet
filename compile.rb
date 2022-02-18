#!/usr/bin/env ruby -w

require 'cgi'

encoded_code = CGI.escape(ARGF.read)
puts "javascript:#{encoded_code}"
