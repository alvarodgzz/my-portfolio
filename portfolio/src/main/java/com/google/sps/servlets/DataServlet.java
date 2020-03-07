// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;
//package arraylist;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
    


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    /// Create my arrayList

    ArrayList<String> facts = new ArrayList<String>();
    facts.add("I'm 6.2 ft  tall");
    facts.add("TIGRES");
    facts.add("I play the bass in a band called Los Insurgentes");
    facts.add("I'm 21 years old");

    /// convert to JSON
    String json = convertToJson(facts);
    //response.setContentType("text/html;");
    //response.getWriter().println("<h1>Hello Alvaro!</h1>");

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

        /**
   * Converts a facts instance into a JSON string using manual String concatentation.
   */
  private String convertToJson(ArrayList<String> facts) {
    String json = "{";
    json += "\"fact1\": ";
    json += "\"" + facts.get(0) + "\"";
    json += ", ";
    json += "\"fact2\": ";
    json += "\"" + facts.get(1) + "\"";
    json += ", ";
    json += "\"fact3\": ";
    json += "\"" + facts.get(2) + "\"";
    json += ", ";
    json += "\"fact4\": ";
    json += "\"" + facts.get(3) + "\"";
    json += "}";
    return json;
  }

}
